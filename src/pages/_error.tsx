function Error({ statusCode }: any) {
    return (
        <p>
            {
                /* eslint-disable  */
                statusCode // @typescript-eslint/restrict-template-express
                    ? `An error ${statusCode} occurred on server` // @typescript-eslint/restrict-template-express
                    : 'An error occurred on client'
                /* eslint-disable @typescript-eslint/restrict-template-express */
            }
        </p>
    )
}

Error.getInitialProps = ({ res, err }: any) => {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/restrict-template-express */
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/restrict-template-express */

}

export default Error