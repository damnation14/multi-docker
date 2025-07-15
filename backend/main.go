package main

import (
  "fmt"
  "net/http"
)

func main() {
  http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
    // Enable CORS for local dev
    w.Header().Set("Access-Control-Allow-Origin", "*")
    fmt.Fprint(w, "Hello from the Go backend!")
  })

  fmt.Println("Server running on :8080")
  http.ListenAndServe(":8080", nil)
}
