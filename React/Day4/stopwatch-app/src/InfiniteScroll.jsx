import styleObj from './style.module.css';
import {useEffect,useState} from 'react';

const InfiniteScroll = ()=>{

    const [pageNum,setPageNum] = useState(1);
    const [error,setError] = useState('');
    const [isLoading ,setIsLoading] = useState(false);
    const [data,setData] = useState([]);

    const loadDataHandler=async ()=>{
        try{
            setIsLoading(true);
            const res= await fetch('https://jsonplaceholder.typicode.com/comments?'+
            new URLSearchParams({_page: pageNum,_limit: 10})
            );
            const jsonResp= await res.json();
            setData([...data,...jsonResp]);
            setIsLoading(false);
        }
        catch(error){
            setError(error.message);
        }
        finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        loadDataHandler()
    },[pageNum]);

    return(
        <>
            <h1 className={styleObj.heading}> Infinite Scrolling/Lazy Loading</h1>
            <div className={styleObj.container}>
            
               {
                    isLoading && (<div>Loading....</div>)
               }
               {    
                    error &&  (<div>error.message</div>)
               }              
                {    data && 
                    ( data.map((item)=>{
                        return <div key={item.id} className={styleObj.text}>{item.body}</div>
                    }))
                }     
            
            <div>{pageNum}</div>
            <button onClick={
                ()=>{
                    setPageNum(pageNum+1);
                }
            }>next</button>
            </div>
        </>
    )
}
export default InfiniteScroll;