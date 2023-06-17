import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@material-ui/core";

function HotelCard({ data, setHotelRender }) {
  console.log(data, setHotelRender);
  return (
    <>
      <Box my={3}>
        <Card
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              alt={data.name}
              width={130}
              height={260}
              src={data.featuredImg}
            />{" "}
          </Box>{" "}
          <CardContent>
            <Grid container>
              <Grid item xs={12} md={9}>
                <Typography
                  component="div"
                  variant="body1"
                  className="boldText zokiHeadings capitalizedText"
                >
                  {data.name}{" "}
                </Typography>{" "}
                <Box my={1}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                  >
                    {`Address: ${data.address.street}, ${data.address.city}, ${data.address.country}`}{" "}
                  </Typography>{" "}
                </Box>{" "}
                <Box my={1}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                  >
                    {`Facilities: ${data.facilities}`}{" "}
                  </Typography>{" "}
                </Box>{" "}
                <Box my={1}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                  >
                    {`Phone: ${data.contactInfo.phone}`}{" "}
                  </Typography>{" "}
                </Box>{" "}
                <Box mt={1}>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        component="div"
                      >
                        {`Available Room(s): ${data.noOfRooms}`}{" "}
                      </Typography>{" "}
                    </Grid>{" "}
                    <Grid item xs={12} md={6}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        component="div"
                      >
                        {`Starts From: $${data.price}`}{" "}
                      </Typography>{" "}
                    </Grid>{" "}
                  </Grid>{" "}
                </Box>{" "}
              </Grid>{" "}
              <Grid
                item
                xs={12}
                md={3}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setHotelRender(data)}
                  className="zokiBtnBg zokiTextBlack boldText rounded-pill capitalizedText"
                  fullWidth
                >
                  View Hotel{" "}
                </Button>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </CardContent>{" "}
        </Card>{" "}
      </Box>{" "}
    </>
  );
}

export default HotelCard;
