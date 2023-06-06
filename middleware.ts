export { default } from "next-auth/middleware"

// requires user's to be logged in to access else redirect to homepage
export const config = {
    matcher: [
        "/trips",
        "/reservations",
        "/properties",
        "/favorites"
    ]
};
