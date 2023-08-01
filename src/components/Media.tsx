import react from 'react'

function Media(props: any){
    return(
        <div>
            <img src={props.data.download_url} alt={props} />
        </div>
    )
}

export default Media