export const mapImageUrl = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: '/' + item.image
        };
    });
};

// foooter fixed at bottom
