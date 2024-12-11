import { Draggable } from "@hello-pangea/dnd";
import Card from "./Card";

const cardList = ({ list }: any) => {
  return (
    <div className="flex flex-col items-center">
      {list.map((item: any, index: any) => {
        return (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided) => (
              <div
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
