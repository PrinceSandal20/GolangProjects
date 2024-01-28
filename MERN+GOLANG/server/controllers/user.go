package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"server/models"
	"time"

	"github.com/golang-jwt/jwt"
	"go.mongodb.org/mongo-driver/bson"
	"golang.org/x/crypto/bcrypt"
)

var jwtKey = []byte("ryoikitenkai@sukhmamishu")

func RegisterUser(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(10 << 20) // 10 MB limit
	if err != nil {
		http.Error(w, "Error parsing form data", http.StatusBadRequest)
		return
	}

	name := r.FormValue("name")
	email := r.FormValue("email")
	password := r.FormValue("password")

	var user models.User
	user.Name = name
	user.Email = email
	user.Password = password

	// Hash the password before storing it
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		http.Error(w, "Error hashing password", http.StatusInternalServerError)
		return
	}
	user.Password = string(hashedPassword)

	db := models.GetDB()
	collection := db.Collection("users")
	result, err := collection.InsertOne(context.TODO(), user)
	if err != nil {
		http.Error(w, fmt.Sprintf("Error creating user: %v", err), http.StatusInternalServerError)
		return
	}

	response := map[string]interface{}{
		"message": "User registered successfully",
		"user_id": result.InsertedID,
	}

	w.WriteHeader(http.StatusCreated)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func LoginUser(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, "Error parsing form data", http.StatusBadRequest)
		return
	}

	email := r.FormValue("email")
	password := r.FormValue("password")

	var userinfo models.User
	userinfo.Email = email
	userinfo.Password = password

	// Retrieve user by email (assuming email is unique)
	user, err := getUserByEmail(userinfo.Email)
	if err != nil {
		http.Error(w, "Invalid email or password", http.StatusUnauthorized)
		return
	}

	// Verify password
	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(userinfo.Password))
	if err != nil {
		http.Error(w, "Invalid email or password", http.StatusUnauthorized)
		return
	}

	// Generate and set a new token
	token, err := generateToken(user.ID.Hex())
	if err != nil {
		http.Error(w, "Error generating token", http.StatusInternalServerError)
		return
	}

	// Set the token as a cookie
	http.SetCookie(w, &http.Cookie{
		Name:     "token",
		Value:    token,
		Expires:  time.Now().Add(24 * time.Hour), // Token expiration time
		HttpOnly: true,
	})

	response := map[string]interface{}{
		"message": "Login successful",
		"user_id": user.ID.Hex(),
	}

	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func generateToken(userID string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"user_id": userID,
		"exp":     time.Now().Add(24 * time.Hour).Unix(), // Token expiration time
	})

	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func getUserByEmail(email string) (models.User, error) {
	db := models.GetDB()
	collection := db.Collection("users")

	var user models.User
	err := collection.FindOne(context.TODO(), bson.D{{Key: "email", Value: email}}).Decode(&user)
	if err != nil {
		return models.User{}, err
	}

	return user, nil
}
