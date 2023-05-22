import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
 
export default function Example() {
  return (
    <>
    <div className="mt-16">
      <h3 className="text-4xl">Iconic Speech of Our Heros:</h3>
    </div>
    <Card className="max-w-xl mx-auto mt-12">
      <List>
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="candice" src="https://c4.wallpaperflare.com/wallpaper/741/384/889/iron-man-iron-man-2-toy-wallpaper-preview.jpg" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              IronMan
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
            I am Iron Man
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="alexander" src="https://ae01.alicdn.com/kf/HTB1r_SzKxGYBuNjy0Fnq6x5lpXai/Groot-Cute-Tree-Flowerpot-Pen-Pot-Figure-Model-Toys-Christmas-Gifts-for-Kids-Office-Decoration.jpg" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Groot
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
            I am Groot.
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="emma" src="https://i.shgcdn.com/adf6e45a-9e4a-49bd-9773-083ec16b53ec/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
             Captain America
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
            I can do this all day.
            </Typography>
          </div>
        </ListItem>
      </List>
    </Card>
    </>
  );
}