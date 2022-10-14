import React from 'react'
import { Avatar, Col, Image, Row } from 'antd';
import "./JobBenefits.scss"
export default function JobBenefits(props) {
    const {benefits}=props;
  return (
   <Row gutter={[12,12]} justify="center">
    {
        benefits.map((b,index)=>{
            let image;
            if(b.name == "womenintecherg"){
                image = "PWI.png";
            }else if(b.name == "remotefriendly"){
                image = "PRF.png";
            }else if(b.name == "paidparentalleave"){
                image = "PPL.png";
            }else if(b.name == "latinxintech"){
                image = "PLT.png";
            }else if(b.name == "lgbtqierg-2"){
                image = "PLGTBIQ.png";
            }else if(b.name == "unlimitedvacation"){
                image = "PUV.png";
            }

            return (
                <Col xs={4} md={8} lg={4}>
               <Avatar  src={<Image src={`/images/${image}`} preview={false} />}  key={index} className="perk"/>
            </Col>
                )
            }
        )
    }
   </Row>
  )
}
