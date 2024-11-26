import { AccountFilter } from "@/components/account-filter";
import { DateFilter } from "@/components/date-filter";
import { Suspense } from "react";

export const Filters = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2">
            <Suspense fallback={<div>Loading Filters...</div>}>
                <AccountFilter />
            </Suspense>
            <Suspense fallback={<div>Loading Date Filter...</div>}>
                <DateFilter />
            </Suspense>
        </div>
    );
};
