'use client'
import Box from "@mui/material/Box";
import UnivBasicInfo from "@/app/university/[id]/univBasicInfo";
import UnivDetail from "@/app/university/[id]/univDetail";
import {useParams} from "next/navigation";
import axios from "axios";
import {Skeleton} from "@mui/material";
import {useState, useEffect} from "react";

export default function CollegePage() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const params = useParams()
    useEffect(() => {
        axios.get('/api/university/' + params.id)
            .then(function (response) {
                setData(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, []);
    return (
        <Box sx={{m: "0 auto"}} maxWidth="md">
            {loading ?
                <Skeleton
                    variant="rectangle"
                    width={900}
                    height={300}
                /> :
                <Box
                    width={900}
                    height={300}
                    sx={{textAlign: 'center'}}
                >
                    <img
                        src={data.pictureLink}
                        alt="collegeImage"
                        height={300}
                    />
                </Box>

            }
            <UnivBasicInfo loading={loading} data={data}/>
            <UnivDetail loading={loading} data={data}/>
        </Box>
    );
}