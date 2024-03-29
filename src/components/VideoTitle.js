const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-full aspect-video absolute pt-[20%] px-12 text-white bg-gradient-to-r from-black mobile:px-2 tablet:pt-[25%]">
            <h1 className="text-6xl font-bold mobile:text-sm mobile:mt-12 tablet:text-[24px]">
                {title}
            </h1>
            <p className="w-1/2 pt-6 pl-1 mobile:text-sm mobile:hidden tablet:text-[16px]">
                {overview}
            </p>
            <div className="pt-10 flex gap-4 pl-1 mobile:pl-0">
                <button className="bg-white hover:bg-opacity-60 px-10 py-4 rounded text-black font-bold text-xl flex justify-center gap-2 text-center mobile:p-2 mobile:text-sm tablet:text-[16px] tablet:p-2">
                    ► Play
                </button>
                <button className="bg-gray-400 px-10 py-4 rounded text-white font-bold text-xl flex justify-center gap-2 text-center mobile:p-2 mobile:text-sm tablet:text-[16px] tablet:p-2">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
