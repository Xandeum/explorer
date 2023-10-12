import getReadableTitleFromAddress, { AddressPageMetadataProps } from '@utils/get-readable-title-from-address';
import { Metadata } from 'next/types';

import AddressLookupTableEntriesPageClient from './page-client';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

export async function generateMetadata(props: AddressPageMetadataProps): Promise<Metadata> {
    return {
        description: `Entries of the address lookup table at ${props.params.address} on Xandeum`,
        title: `Address Lookup Table Entries | ${await getReadableTitleFromAddress(props)} | Xandeum`,
    };
}

export default function AddressLookupTableEntriesPage(props: Props) {
    return <AddressLookupTableEntriesPageClient {...props} />;
}
