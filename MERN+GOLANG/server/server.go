package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"server/models"
	"server/routes"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {
	if err := models.InitDB(); err != nil {
		log.Fatal("Error initializing database:", err)
	}

	r := mux.NewRouter()
	r.Use(handleOptions) // Use the handleOptions middleware
	routes.SetRoutes(r)

	r.PathPrefix("/uploads/").Handler(http.StripPrefix("/uploads/", http.FileServer(http.Dir("uploads"))))

	corsHandler := handlers.CORS(
		handlers.AllowedHeaders([]string{"Content-Type"}),
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"}),
		handlers.AllowedOrigins([]string{"http://localhost:5173"}), // Update this to match your frontend origin in production
		handlers.AllowCredentials(),
	)

	wrappedRouter := corsHandler(r)
	loggedRouter := handlers.LoggingHandler(os.Stdout, wrappedRouter)

	server := &http.Server{
		Addr:    ":8000",
		Handler: loggedRouter,
	}

	fmt.Printf("Starting server at 8000\n")
	err := server.ListenAndServe()
	if err != nil && err != http.ErrServerClosed {
		log.Fatal("Server error:", err)
	}
}

// Middleware to handle preflight OPTIONS requests
func handleOptions(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "OPTIONS" {
			w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173") // Update with your frontend origin
			w.Header().Set("Access-Control-Allow-Methods", "POST")
			w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
			w.Header().Set("Access-Control-Allow-Credentials", "true")
			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w, r)
	})
}
