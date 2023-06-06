import prisma from "@/app/libs/prismadb";

interface IParams {
    listingId?: string;
    userId?: string;
    authorId?: string;
}

// define prisma action to get all reservations by the user
export default async function getReservations(
    params: IParams
) {
    try {
        const { listingId, userId, authorId } = params;

        const query: any = {};

        if (listingId) {
            query.listingId = listingId;
        };

        if (userId) {
            query.userId = userId;
        }

        if (authorId) {
            query.listing = { userId: authorId };
        }

        // return all reservations that fit within the given parameters above
        const reservations = await prisma.reservation.findMany({
            where: query,
            include: {
                listing: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        // sanatize reservations into strings        
        const safeReservations = reservations.map(
            (reservation) => ({
                ...reservation,
                createdAt: reservation.createdAt.toISOString(),
                startDate: reservation.startDate.toISOString(),
                endDate: reservation.endDate.toISOString(),
                listing: {
                    ...reservation.listing,
                    createdAt: reservation.listing.createdAt.toISOString(),
                },
            }));

        return safeReservations;
    } catch (error: any) {
        throw new Error(error);
    }
}
