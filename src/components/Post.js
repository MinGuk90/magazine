import React from "react";

import {Grid, Text, Image} from "../elements/index";

const Post = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex width="auto">
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.user_info.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글{props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "minguk",
    user_profile:
      "https://i.pinimg.com/736x/a6/3f/9e/a63f9ea80aff38416b513d4d13f5f300.jpg",
  },
  image_url:
    "https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjlfMzcg/MDAxNTUzODI3OTU3NTg1.geQ7whX1F1DWXBeARbVmBfuqZWp_Db152hko56ZQneIg.5fjMBtfCJeBPcwr1CIndT4qQGbepVcgI9skIDJkEDq8g.JPEG.petianbooks/%25EA%25B0%2595%25EC%2595%2584%25EC%25A7%2580_%25EA%25B0%25B8%25EC%259A%25B0%25EB%259A%25B1.jpg?type=w800",
  contents: "갸우뚱????",
  comment_cnt: 10,
  insert_dt: "2021-10-06 10:10:00",
  is_me: false,
};

export default Post;
