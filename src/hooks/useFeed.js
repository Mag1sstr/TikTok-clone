// import { useQuery } from "@tanstack/react-query";
// import { request } from "../utils/common";
// import { REGION } from "../utils/constants";

// const getFeed = async () => {
//   const response = await request({
//     path: `feed/list?region=${REGION}&count=20`,
//   });
// };

// export const useFeed = () => {
//   const { data } = useQuery({
//     queryKey: ["feed"],
//     queryFn: getFeed,
//   });
//   return { data: data?.data || [] };
// };
