import { useContext } from 'react'
import WatchListContext from '../store/watchlist-context'
import WatchListItem from '../components/WatchListItem';

const WatchList = () => {

    const { watchList } = useContext(WatchListContext);

    return (
        <div className='my-10'>
            {
                watchList.map((item, idx) => {
                    return <WatchListItem key={idx} movie={ item } />
                })
            }
        </div>
    )
}

export default WatchList
