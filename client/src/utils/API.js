import axios from "axios";

export default {
    //USER TRAVEL PROFILE
    createTravelProfile: (travellogData) => {
        return (axios.post(`/api/profile/`, travellogData))
    },

    getTravelProfile: () => { //userID
        return (axios.get(`/api/profile/`))
    },

    editTravelProfile: (profileData) => {
        return (axios.patch(`/api/profile/`, profileData))
    },

    //TRAVEL
    findAllTravel: (userId) => {
        return (axios.get(`/api/travel/${userId}`))
    },
    createTravel: (travelData, userId) => {
        return (axios.post(`/api/travel/${userId}`, travelData))
    },

    findOneTravel: (travelId, userId) => {
        return (axios.get(`/api/travel/${userId}/${travelId}`))
    },

    editTravel: (travelId,userId, travelData) => {
        return (axios.put(`/api/travel/${userId}/${travelId}`, travelData))
    },

    deleteTravel: (travelId, userId) => {
        return (axios.delete(`/api/travel/${userId}/${travelId}`))
    }

}