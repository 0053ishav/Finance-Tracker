"use client";
import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { DataTable } from "@/components/data-table";

import { columns } from "./columns";

import { useNewCategory } from "@/features/categories/hooks/use-new-category";
import { useGetCategories } from "@/features/categories/api/use-get-categories";
import { useBulkDeleteCategories } from "@/features/categories/api/use-bulk-delete-categories";



const CategoriesPage = () => {
  const newAccount = useNewCategory();
  const categoriesQuery = useGetCategories();
  const deleteCategories = useBulkDeleteCategories(); 
  const accounts = categoriesQuery.data || [];

  const isDisabled = categoriesQuery.isLoading || deleteCategories.isPending;


  if(categoriesQuery.isLoading) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
          <Card className="border-none drop-shadow-sm">
            <CardHeader>
              <Skeleton className="h-8 w-48"/>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] w-full flex items-center justify-center">
                <Loader2 className="size-6 text-slate-300 animate-spin"/>
              </div>
            </CardContent>
          </Card>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="flex justify-center items-center h-[500px]"><Loader2 className="text-slate-300 animate-spin" /></div>}>

    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Categories Page</CardTitle>
          <Button size="sm" onClick={newAccount.onOpen}>
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={accounts}
            filterKey="name"
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteCategories.mutate({ ids })
            }}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </div>
    </Suspense>
  );
};

export default CategoriesPage;
