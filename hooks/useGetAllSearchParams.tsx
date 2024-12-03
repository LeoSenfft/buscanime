import { useSearchParams } from "next/navigation";

function useGetAllSearchParams() {
  const searchParams = useSearchParams();
  const allParams: { [anyProp: string]: string } = {};

  searchParams.forEach((value, key) => {
    allParams[key] = value;
  });

  return { allParams };
}

export default useGetAllSearchParams;
