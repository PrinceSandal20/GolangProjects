package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"server/models"
	"strconv"
	"time"
)

func CreateProducts(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, "Error while Parsing Form", http.StatusBadRequest)
		return
	}
	productName := r.FormValue("productname")
	productPrice := r.FormValue("productprice")
	image := r.FormValue("image")

	//converting
	price, err := strconv.ParseFloat(productPrice, 64)
	if err != nil {
		http.Error(w, "Error parsing product price", http.StatusBadRequest)
		return
	}

	var product models.Product
	product.ProductName = productName
	product.ProductPrice = price
	product.Image = image

	db := models.GetDB()
	collection := db.Collection("products")
	result, err := collection.InsertOne(context.TODO(), product)
	if err != nil {
		http.Error(w, fmt.Sprintf("Error creating product: %v", err), http.StatusInternalServerError)
		return
	}

	response := map[string]interface{}{
		"message":    "Product added successfully",
		"product_id": result.InsertedID,
	}

	w.WriteHeader(http.StatusCreated)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)

}

func UploadFiles(w http.ResponseWriter, r *http.Request) {
	// Parse the multipart form
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, "Error while Parsing", http.StatusBadRequest)
		return
	}

	// Retrieve the file from the request
	file, handler, err := r.FormFile("photo")
	if err != nil {
		http.Error(w, "Error while retrieving", http.StatusBadRequest)
		return
	}
	defer file.Close()

	// Create a unique filename
	filename := handler.Filename
	ext := filepath.Ext(filename)
	filename = fmt.Sprintf("%s%s", generateUniqueFilename(), ext)

	// Create a new file on the server to store the uploaded file
	f, err := os.Create(filepath.Join("uploads", filename))
	if err != nil {
		http.Error(w, "Unable to create file on server", http.StatusInternalServerError)
		return
	}
	defer f.Close()

	// Copy the uploaded file to the newly created file
	_, err = io.Copy(f, file)
	if err != nil {
		http.Error(w, "Error while copying", http.StatusInternalServerError)
		return
	}

	// Respond with a JSON response containing the uploaded file path
	response := map[string]string{
		"message": "File uploaded successfully",
		"path":    filename,
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(response)
}

func generateUniqueFilename() string {
	timestamp := time.Now().UnixNano() / int64(time.Millisecond)
	return fmt.Sprintf("file_%d", timestamp)
}
