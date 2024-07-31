import supabase from "./supabase";

export async function getNetworkImages() {
  let { data: image, error } = await supabase
    .from("social-nets-images")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Images couldn't be loaded");
  }

  return image;
}

export async function getArticles() {
  let { data, error } = await supabase.from("beauty-posts").select("*");

  if (error) {
    console.error(error);
    throw new Error("Image couldn't be loaded");
  }

  return data;
}

export async function searchArticles(text) {
  let { data, error } = await supabase
    .from("beauty-posts")
    .select("*")
    .textSearch("post_text, post_slogan", text, {
      type: "plain",
      config: "english",
    });

  if (error) {
    console.error(error);
    throw new Error("Sorry, there was an error loading data");
  }

  return data;
}
