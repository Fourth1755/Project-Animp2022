import React, { useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './index.scss'
import AddAnimeModal from "../AddAnimeModal";
import { useSelector, useDispatch } from 'react-redux'
const SliderAnime=(props)=>{
    
    const myAnimeList = useSelector(state => state.myAnimeList)
    const nameOfMyAnimeList=myAnimeList.map((item)=>item.name)
    const {tagAnime,animeList} =props
    const [modalAnime,setModalAnime]=useState()

    const [open, setOpen] = useState(false);
    const handleOpen = (item) => {
        setModalAnime(item)
        setOpen(true);
    }
    const handleClose = () =>setOpen(false);
    return(
        <>
            <div className="slide-anime-header">
                <h2>{tagAnime}</h2>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={20}
                    slidesPerGroup={7}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    id="swiper-anime"
                    >
                    {animeList.map((item)=>
                    <SwiperSlide key={item.id}  onClick={()=>handleOpen(item)}>
                        <div className='swiper-slide-anime' style={{backgroundImage:`url(${item.image})`}}>
                            {nameOfMyAnimeList.includes(item.name)?<h5>Watched</h5>:<></>}
                        </div>
                    </SwiperSlide>
                    )}
                </Swiper>
                
            </div>
            <AddAnimeModal open={open} onClose={handleClose} anime={modalAnime}/>
        </>
        
    )
}
export default SliderAnime;