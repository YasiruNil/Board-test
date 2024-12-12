import { Draggable } from "@hello-pangea/dnd";
import Card from "./Card";

const cardList = ({ list }: any) => {
  return (
    <div className="flex flex-col items-center mx-3 m:mx-5 xl:mx-8">
      {list.map((item: any, index: any) => {
        return (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided) => (
              <div
                className="w-full"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Card task={item} />
              </div>
            )}
          </Draggable>
        );
      })}
    </div>
  );
};

export default cardList;
