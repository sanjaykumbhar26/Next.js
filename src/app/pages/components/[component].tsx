// pages/components/[component].tsx
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ComponentsLayout from "../../components/pages";

const ComponentPage = () => {
  const router = useRouter();
  const { component } = router.query;

  if (typeof component !== "string") {
    return <div>Loading...</div>;
  }

  const DynamicComponent = dynamic(
    () => import(`../../pages/components/${component}`),
    {
      ssr: false,
      loading: () => <div>Loading Component...</div>,
    }
  );

  return (
    <ComponentsLayout>
      <DynamicComponent />
    </ComponentsLayout>
  );
};

export default ComponentPage;
