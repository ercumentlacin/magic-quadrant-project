import { ChangeEvent, useRef, useState, useEffect } from 'react';
import InnerChart from './components/InnerChart';
import Layout from './components/Layout';
import { Flex } from './components/Layout/Layout';
import Table from './components/Table';
import { useLocalStorage } from './hooks/useLocalStorage';
import { companyLayer } from './utils';

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

  const [savedCompanys, saveCompanys] = useLocalStorage('companys', companys);

  useEffect(() => {
    if (savedCompanys.length) {
      setCompanys(savedCompanys);
    }
  }, [savedCompanys]);

  useEffect(() => {
    saveCompanys(companys);
  }, [companys, saveCompanys]);

  function addCompany() {
    const newCompanys = companyLayer.addCompany(companys);
    setCompanys(newCompanys);
  }
  function deleteCompany(id: number) {
    const newCompanys = companyLayer.deleteCompany(companys, id);
    setCompanys(newCompanys);
  }

  function handleCompanyChange(
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) {
    const newCompanys = companyLayer.handleCompanyChange(event, companys, id);
    setCompanys(newCompanys);
  }

  function handlePointDrag(event: React.DragEvent<HTMLDivElement>, id: number) {
    if (!draggableArea.current) return companys;

    const newCompanys =
      companyLayer.handlePointDrag(event, companys, id, draggableArea) ||
      companys;
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
