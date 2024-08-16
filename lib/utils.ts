import db from "./db";
import getSession from "./session";


export const LogIn = async (id: number) => {
  try {
    const session: any = await getSession();
    session.id = id;
    await session.save();
  } catch (error) {
    console.error("Failed to log in:", error);
  }
};


export function formatToTimeAgo(date: Date | string): string {
  const parsedDate = typeof date === 'string' ? new Date(date) : date;
  const time = parsedDate.getTime();
  const now = new Date().getTime();
  const diff = Math.round((now - time) / (1000 * 60 * 60 * 24)); // Days difference

  const formatter = new Intl.RelativeTimeFormat("en");

  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  if (diff < 30) return formatter.format(-diff, "days");
  if (diff < 365) return `${Math.floor(diff / 30)} months ago`;
  return `${Math.floor(diff / 365)} years ago`;
}



export function formatToAUD(price: number | undefined): string {
  if (price === undefined || isNaN(price)) {
    return "$0.00"; // Default value
  }
  return price.toLocaleString("en-AU", { style: "currency", currency: "AUD" });
}



export async function getProduct(id: number) {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
          avatar: true,
        },
      },
    },
  });
  return product;
}