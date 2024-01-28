package routes

import (
	"fmt"
	"net/http"
	"server/controllers"

	"github.com/gorilla/mux"
)

func SetRoutes(r *mux.Router) {
	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Hello")
	}).Methods("GET")
	r.HandleFunc("/register", controllers.RegisterUser).Methods("POST")
	r.HandleFunc("/login", controllers.LoginUser).Methods("POST")
	r.HandleFunc("/create-product", controllers.CreateProducts).Methods("POST")
	r.HandleFunc("/upload-image", controllers.UploadFiles).Methods("POST")
}
