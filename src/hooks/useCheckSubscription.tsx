export default function useCheckSubscription() {
  const isSubAvailable = (data) => {
    // console.log("Data from checkSubscription available ", data);
    return data?.some((element) => element?.subscriptionPlan);
  };
  const subscriptionCount = (data) => {
    return data?.filter((element) => element?.subscriptionPlan).length;
  };

  return {
    isSubAvailable,
    subscriptionCount,
  };
}
