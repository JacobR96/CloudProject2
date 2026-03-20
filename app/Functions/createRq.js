const API_URL = process.env.NEXT_PUBLIC_CREATE_FUNCTION_URL;
// (If you're using Next.js instead of Vite, use: process.env.NEXT_PUBLIC_CREATE_FUNCTION_URL)

export default async function createRq(requestType) {
  const payload = {
    requestType,
    createdAt: new Date().toISOString(),
    status: "pending",
  };

  // 🔧 MOCK behavior (for now)
  if (!API_URL) {
    console.log("MOCK MODE: No API URL set");
    console.log("Payload:", payload);

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mock request sent successfully");
        resolve({ success: true });
      }, 500);
    });
  }

  // 🚀 REAL API CALL (when ready)
  try {

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Failed to create request");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
}