import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Navbar from '../layout/Navbar';

export default function About() {

  return (
    <div class="contents">
        <Navbar />
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h1">
              About this project
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Typography variant="body1" align="left" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sed tortor ac erat commodo cursus vel ac orci.
                Suspendisse id malesuada leo. Maecenas porta mauris ut volutpat
                accumsan. Mauris ultricies commodo justo eu efficitur. Nunc
                fringilla efficitur hendrerit. Suspendisse pulvinar metus eget
                nibh lacinia, quis cursus nulla faucibus. Vivamus id eros a odio
                malesuada vestibulum eu ut velit. Nulla gravida, erat id aliquam
                accumsan, ante nibh imperdiet dui, id facilisis augue sem nec
                tortor. Sed ex velit, iaculis quis augue id, condimentum
                interdum urna. Sed vehicula bibendum enim. Aliquam elit dui,
                facilisis quis scelerisque a, scelerisque vel risus. Mauris
                sollicitudin sit amet neque blandit viverra. Nulla elit nibh,
                tempor id porttitor ac, mollis eu massa.
              </Typography>
              <Typography variant="body1" align="left" gutterBottom>
                Pellentesque ultricies fringilla arcu, quis aliquet mi sodales
                quis. Etiam ornare tortor id erat molestie, in rutrum diam
                dapibus. Sed at egestas enim. Praesent quis consequat quam, quis
                finibus risus. Etiam sagittis arcu erat, a consectetur lorem
                venenatis quis. Fusce a enim sodales purus cursus eleifend sed
                at enim. Aenean vitae commodo neque, nec suscipit sapien. Etiam
                posuere sapien vel mauris rhoncus aliquet. Aliquam porta magna
                nibh, sed tempus eros interdum eu. Cras imperdiet, urna id
                placerat suscipit, dolor risus feugiat urna, sit amet auctor
                nisi erat at nisl. Duis sit amet finibus nibh, ut varius urna.
                Donec nec est erat. Vestibulum efficitur leo eget luctus
                tincidunt. In consectetur ut elit a accumsan. Donec ut imperdiet
                nibh, et faucibus lacus. Ut elit enim, consequat sit amet metus
                eu, luctus mollis enim.
              </Typography>
              <Typography variant="body1" align="left" gutterBottom>
                Etiam dignissim faucibus urna. Vestibulum laoreet, erat id
                ultricies sodales, risus enim venenatis ligula, at facilisis sem
                quam sed nunc. Cras ut suscipit tortor. Aliquam erat volutpat.
                Mauris sit amet velit id nibh gravida commodo vitae vitae purus.
                Sed non lorem mattis, fringilla massa vel, dictum urna. Nullam
                mattis quam et porttitor pretium. Vivamus pretium tincidunt quam
                id lobortis.
              </Typography>
              <Typography variant="body1" align="left" gutterBottom>
                Nunc ut ex metus. Etiam imperdiet ipsum eget ipsum rutrum,
                facilisis condimentum sapien ullamcorper. Nullam ornare
                scelerisque purus a placerat. Nulla semper risus libero, sed
                venenatis felis ullamcorper ac. Nam odio lorem, bibendum nec
                erat at, ullamcorper fermentum arcu. Vestibulum mollis, neque
                vel rutrum commodo, eros est scelerisque nulla, sit amet
                ultrices velit ligula eu neque. Nulla facilisi. In tincidunt non
                ligula in molestie. Aenean vel nisi nisi. Praesent fringilla
                hendrerit ante non sollicitudin.
              </Typography>
              <Typography variant="body1" align="left" gutterBottom>
                Ut dignissim aliquam pretium. Sed bibendum efficitur neque non
                finibus. Sed et ipsum ac dui dignissim posuere. Integer at
                volutpat eros. Praesent faucibus, ante ut congue tincidunt, orci
                dolor mattis dui, sed semper dolor felis id justo. Proin eget
                condimentum nisi. Etiam vel metus leo.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
