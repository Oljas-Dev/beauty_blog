import { useQuery } from "@tanstack/react-query";
import { getNetworkImages } from "../services/apiStorage";

export function useImages() {
  const { isLoading, data: images } = useQuery({
    queryKey: ["social-nets-images"],
    queryFn: getNetworkImages,
  });

  return { isLoading, images };
}
