import { ChangeEvent, useRef, useState } from 'react';
import InnerChart from './components/InnerChart';
import Layout from './components/Layout';
import { Flex } from './components/Layout/Layout';
import Table from './components/Table';

const { Arrow, ChartColumn, Container, Text, VerticalText } = Layout;

export interface ICompany {
  label: string;
  vision: number;
  ability: number;
  id: number;
}

export default function App() {
  const [companys, setCompanys] = useState([] as ICompany[]);
  const [isDragging, setIsDragging] = useState(false);
  const draggableArea = useRef<HTMLDivElement | null>(null);

  function addCompany() {
    const newCompanys = [
      ...companys,
      { id: Date.now(), label: '', vision: 50, ability: 50 },
    ];
    setCompanys(newCompanys);
  }
  function deleteCompany(id: number) {
    const newCompanys = companys.filter((company) => company.id !== id);
    setCompanys(newCompanys);
  }

  function handleCompanyChange(
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) {
    const { name, value } = event.target;
    const newCompanys = companys.map((company) => {
      if (company.id === Number(id)) {
        return { ...company, [name]: value };
      }
      return company;
    });
    setCompanys(newCompanys);
  }

  function handlePointDrag(event: React.DragEvent<HTMLDivElement>, id: number) {
    if (!draggableArea.current) return;

    const { clientX, clientY, pageX, pageY } = event;
    const { left, top } = draggableArea.current.getBoundingClientRect();

    const newCompanys = companys.map((company) => {
      if (company.id === Number(id)) {
        const ability =
          pageX - +(Math.round(clientY - top - 800) / 8).toFixed();
        const vision = pageY - +Math.round((clientX - left) / 8).toFixed();
        console.log({
          ability,
          vision,
          pageX,
          pageY,
        });

        return {
          ...company,
          ability,
          vision,
        };
      }
      return company;
    });
    console.log('newCompanys :>> ', newCompanys);
    setCompanys(newCompanys);
  }

  const props = {
    companys,
    addCompany,
    deleteCompany,
    handleCompanyChange,
  };

  return (
    <Flex wrap='wrap' gap={1}>
      <ChartColumn>
        <Container>
          <VerticalText>
            <span>Ability to execute </span>
            <Arrow direction='up'>&#8594;</Arrow>
          </VerticalText>

          <InnerChart
            companys={companys}
            draggableArea={draggableArea}
            handlePointDrag={handlePointDrag}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
          />
        </Container>

        <Text>
          <span>Completeness of vision</span> <Arrow>&#8594;</Arrow>
        </Text>
      </ChartColumn>

      <Table {...props} />
    </Flex>
  );
}
