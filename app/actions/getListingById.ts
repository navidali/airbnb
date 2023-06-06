import prisma from "@/app/libs/prismadb";

interface IParams {
    listingId?: string;
}

// define prisma action to get specific listing by id.
export default async function getListingById(
    params: IParams
) {
    try {
        // get listingId from our route
        const { listingId } = params;

        // get the specific listing and the the user
        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId,
            },
            include: {
                user: true
            }
        });

        if (!listing) {
            return null;
        }

        // return Lisitng and User objects in to readable strings
        return {
            ...listing,
            createdAt: listing.createdAt.toString(),
            user: {
                ...listing.user,
                createdAt: listing.user.createdAt.toString(),
                updatedAt: listing.user.updatedAt.toString(),
                emailVerified:
                    listing.user.emailVerified?.toString() || null,
            }
        };
    } catch (error: any) {
        throw new Error(error);
    }
}
