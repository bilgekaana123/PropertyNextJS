import React from "react";
import PropertySearchForm from "@/components/PropertySearchForm";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import Properties from "@/components/Properties";

const PropertiesPage = async () => {
  return (
    <>
      <section class="bg-blue-700 py-4">
        <div class="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <Properties />
    </>
  );
};
export default PropertiesPage;
