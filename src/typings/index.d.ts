namespace Challenges {
    type Status = (
        | 'In Queue' 
        | 'In Progress' 
        | 'Finished'
    );

    type Item = {
        name: string
        path: string
        image: string
        status: Status
    }
}