import SupplyPageClient from './page-client';

export const metadata = {
    description: `Overview of the native token supply on Xandeum`,
    title: `Supply Overview | Xandeum`,
};

export default function SupplyPage() {
    return <SupplyPageClient />;
}
