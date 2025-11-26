"use client";

// import { useParams, notFound } from "next/navigation";
import { FanLink } from "@/components/fanlink/Fanlink";
import { CircularLoader } from "@/components/ui/circular-loader";
// import { notFound } from "next/navigation";

// import { useQuery } from '@tanstack/react-query';
// import { getFanlinkBySlug } from '@/lib/api/fanlink';

export default function FanlinkPage() {
  //   const params = useParams();
  //   const slug = params.slug as string;

  // ============================================
  // MOCK DATA FOR DEVELOPMENT
  // Remove this section when API is ready
  // ============================================
  const isLoading = false; // Set to true to test loader

  // Uncomment this to test 404
  //   notFound();

  // ============================================
  // REAL API IMPLEMENTATION (Currently Commented)
  // Uncomment when backend endpoint is ready
  // ============================================
  // const {
  //   data,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ['fanlink', slug],
  //   queryFn: () => getFanlinkBySlug(slug),
  //   retry: 1,
  //   staleTime: 1000 * 60 * 5, // 5 minutes
  // });

  // Show circular loader while fetching
  if (isLoading) {
    return <CircularLoader />;
  }

  // ============================================
  // WHEN API IS READY, REPLACE THESE LINES:
  // ============================================
  // Uncomment this for real API:
  // if (isError || !data?.success) {
  //   notFound();
  // }
  // const transformedData = transformFanlinkData(data.data);
  // return <FanLink data={transformedData} />;

  // Currently using mock data:
  return <FanLink />;
}
