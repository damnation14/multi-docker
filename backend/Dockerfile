# Build stage
FROM golang:1.24 as builder
WORKDIR /app
COPY . .
RUN GOOS=linux GOARCH=amd64 go build -o main .

# Run stage
FROM alpine
WORKDIR /app
COPY --from=builder /app/main .
EXPOSE 8080
CMD ["./main"]
