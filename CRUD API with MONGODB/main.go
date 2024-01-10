package main

import (
	"context"
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Movie struct {
	ID       string    `json:"id"`
	Isbn     string    `json:"isbn"`
	Title    string    `json:"title"`
	Director *Director `json:"director"`
}

type Director struct {
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
}

var movies []Movie
var client *mongo.Client

func init() {
	// Initialize MongoDB client
	clientOptions := options.Client().ApplyURI("mongodb://127.0.0.1:27017")
	var err error
	client, err = mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	// Ping the MongoDB server to check the connection
	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB")
}

// Get all movies
func getAllMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	collection := client.Database("GoMovies").Collection("movies")

	cursor, err := collection.Find(context.Background(), bson.D{})
	if err != nil {
		log.Fatal(err)
	}

	var movies []Movie
	if err := cursor.All(context.Background(), &movies); err != nil {
		log.Fatal(err)
	}

	json.NewEncoder(w).Encode(movies)
}

// Create a new movie
func createMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var movie Movie
	_ = json.NewDecoder(r.Body).Decode(&movie)

	collection := client.Database("GoMovies").Collection("movies")
	_, err := collection.InsertOne(context.Background(), movie)
	if err != nil {
		log.Fatal(err)
	}

	json.NewEncoder(w).Encode(movie)
}

// Update an existing movie by ID
func updateMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)

	collection := client.Database("GoMovies").Collection("movies")

	var updatedMovie Movie
	if err := json.NewDecoder(r.Body).Decode(&updatedMovie); err != nil {
		log.Fatal(err)
	}

	filter := bson.D{{Key: "id", Value: params["id"]}}
	update := bson.D{{Key: "$set", Value: updatedMovie}}

	result, err := collection.UpdateOne(context.Background(), filter, update)
	if err != nil {
		log.Fatal(err)
	}

	if result.ModifiedCount == 0 {
		http.Error(w, "Movie not found", http.StatusNotFound)
		return
	}

	// Fetch the updated movie from the database and send it as the response
	updatedMovie = Movie{}
	if err := collection.FindOne(context.Background(), filter).Decode(&updatedMovie); err != nil {
		log.Fatal(err)
	}

	json.NewEncoder(w).Encode(updatedMovie)
}

// Delete a movie by ID
func deleteMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)

	collection := client.Database("GoMovies").Collection("movies")

	filter := bson.D{{Key: "id", Value: params["id"]}}

	result, err := collection.DeleteOne(context.Background(), filter)
	if err != nil {
		log.Fatal(err)
	}

	if result.DeletedCount == 0 {
		http.Error(w, "Movie not found", http.StatusNotFound)
		return
	}

	// Send a success message as the response
	json.NewEncoder(w).Encode(map[string]string{"message": "Movie deleted successfully"})
}

// Get a movie by ID
func getMovieById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)

	collection := client.Database("GoMovies").Collection("movies")

	var movie Movie
	filter := bson.D{{Key: "id", Value: params["id"]}}

	err := collection.FindOne(context.Background(), filter).Decode(&movie)
	if err != nil {
		http.Error(w, "Movie not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(movie)
}

func getdata(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")

	collection := client.Database("GoMovies").Collection("movies")

	cursor, err := collection.Find(context.Background(), bson.D{})
	if err != nil {
		log.Fatal(err)
	}

	var data []Movie
	if err := cursor.All(context.Background(), &data); err != nil {
		log.Fatal(err)
	}

	tmpl, err := template.ParseFiles("templates/index.html")
	if err != nil {
		log.Fatal(err)
	}

	err = tmpl.Execute(w, struct{ Movies []Movie }{Movies: data})
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	r := mux.NewRouter()
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	// Add sample movies to the MongoDB collection
	collection := client.Database("GoMovies").Collection("movies")
	movies = append(movies, Movie{ID: "1", Isbn: "123456", Title: "Movie one", Director: &Director{Firstname: "Yuiji", Lastname: "Itadori"}})
	movies = append(movies, Movie{ID: "2", Isbn: "133456", Title: "Movie two", Director: &Director{Firstname: "Satoru", Lastname: "Gojo"}})
	for _, movie := range movies {
		_, err := collection.InsertOne(context.Background(), movie)
		if err != nil {
			log.Fatal(err)
		}
	}

	// Define API endpoints

	r.HandleFunc("/movies", getAllMovie).Methods("GET")
	r.HandleFunc("/movies/{id}", getMovieById).Methods("GET")
	r.HandleFunc("/movies", createMovie).Methods("POST")
	r.HandleFunc("/movies/{id}", updateMovie).Methods("PUT")
	r.HandleFunc("/movies/{id}", deleteMovie).Methods("DELETE")
	r.HandleFunc("/", getdata).Methods("GET")

	fmt.Printf("Starting Server at port 8000\n")
	log.Fatal(http.ListenAndServe(":8000", r))
}
