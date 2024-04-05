const IDPage = ({
    params,
}: {
    params: {
        id: string
    }

    }) => {
    return (
        <div>
            ID: {params.id} Page!
        </div>
    );
}

export default IDPage;