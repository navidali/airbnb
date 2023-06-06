import prisma from "@/app/libs/prismadb";

import getCurrentUser from "./getCurrentUser";

// define prisma action to get all favorited listings by the current user
export default async function getFavoriteListings() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return [];
        }

        // get the user's favorited listings and if it doesn't exist return an empty array
        const favorites = await prisma.listing.findMany({
            where: {
                id: {
                    in: [...(currentUser.favoriteIds || [])]
                }
            }
        });

        // return Lisitng object in to readable strings
        const safeFavorites = favorites.map((favorite) => ({
            ...favorite,
            createdAt: favorite.createdAt.toString(),
        }));

        return safeFavorites;
    } catch (error: any) {
        throw new Error(error);
    }
}
