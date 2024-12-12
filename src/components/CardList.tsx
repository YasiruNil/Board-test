import { Draggable } from "@hello-pangea/dnd";

import Card from "./Card";
import { TaskList, TaskState } from "../interfaces/task.interface";
import { useAppSelector } from "../redux/hooks";

const cardList = ({ list }: { list: TaskList[] }) => {
  const { searchValue } =
  useAppSelector((state: TaskState) => state.tasks);
  
  return (
    <div className="flex flex-col items-center mx-3 m:mx-5 xl:mx-8">
      {/* for filtering description is used and item description and search value text should be lowercase */}
      {list.filter((item)=>item.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())).map((item: any, index: any) => {
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
