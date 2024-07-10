import connectDB from "@/config/database";
import User from "@/models/user";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

export const POST = async (request) => {
  await connectDB();

  const { propertyId } = await request.json();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId)
    return new Response("User ID is required");

  const { userId } = sessionUser;

  // Find user in database
  const user = await User.findOne({ _id: userId });

  // Check if property is bookmarked
  let isBookmarked = user.bookmarks.includes(propertyId);

  return new Response(JSON.stringify({ isBookmarked }));
};
