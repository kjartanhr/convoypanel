import Table, { RowActionsProps } from '@/components/elements/displays/Table'
import PageContentBlock from '@/components/elements/PageContentBlock'
import useSWR from 'swr'
import usePagination from '@/util/usePagination'
import getLocations, { Location, LocationResponse } from '@/api/admin/locations/getLocations'
import Spinner from '@/components/elements/Spinner'
import { Column } from '@/components/elements/displays/Table'
import Pagination from '@/components/elements/Pagination'
import Button from '@/components/elements/Button'
import EditLocationModal from '@/components/admin/locations/EditLocationModal'
import { useState } from 'react'
import Menu from '@/components/elements/Menu'
import deleteLocation from '@/api/admin/locations/deleteLocation'

const columns: Column<Location>[] = [
    {
        header: 'Short Code',
        accessor: 'shortCode',
    },
    {
        header: 'Description',
        accessor: 'description',
        overflow: true,
    },
    {
        header: 'Nodes',
        accessor: 'nodesCount',
        align: 'center',
    },
    {
        header: 'Servers',
        accessor: 'serversCount',
        align: 'center',
    },
]

const LocationsContainer = () => {
    const [page, setPage] = usePagination()
    const [open, setOpen] = useState(false)

    const { data, mutate } = useSWR(['admin:locations', page], () => getLocations({ page }))

    const [location, setLocation] = useState<Location | undefined>(undefined)

    const rowActions = ({ row: loc }: RowActionsProps<Location>) => {
        const handleEdit = () => {
            console.log(loc)
            setLocation(loc)
            setOpen(true)
        }

        const handleDelete = () => {
            console.log(loc)
            deleteLocation(loc.id)
                .then(() => {
                    mutate(
                        mutateData => ({
                            ...mutateData,
                            items: mutateData!.items.filter(l => l.id !== loc.id),
                        }) as LocationResponse,
                        false
                    )
                })
                .catch(error => {
                    console.error(error)
                })
        }

        return (
            <>
                <Menu.Item onClick={handleEdit}>Edit</Menu.Item>
                <Menu.Divider />
                <Menu.Item color='danger' disabled={loc.nodesCount > 0} onClick={handleDelete}>
                    Delete
                </Menu.Item>
            </>
        )
    }

    const handleClose = () => {
        setOpen(false)
        setLocation(undefined)
    }

    return (
        <div className='bg-background min-h-screen'>
            <EditLocationModal location={location} mutate={mutate} open={open} onClose={handleClose} />
            <PageContentBlock title='Locations' showFlashKey='admin:locations'>
                <div className='flex justify-end items-center mb-3'>
                    <Button onClick={() => setOpen(true)} variant='filled'>
                        New Location
                    </Button>
                </div>
                {!data ? (
                    <Spinner />
                ) : (
                    <Pagination data={data} onPageSelect={setPage}>
                        {({ items }) => <Table columns={columns} data={items} rowActions={rowActions} />}
                    </Pagination>
                )}
            </PageContentBlock>
        </div>
    )
}

export default LocationsContainer
