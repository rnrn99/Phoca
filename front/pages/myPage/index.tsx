import { NextPage } from "next";
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from "@utils/constant";
import {
  Browser,
  MyPageWrapper,
  UserInfoEdit,
  Avatar,
  AvatarImage,
  Wrapper,
  Triangle,
  UserName,
  UserInfoDetail,
  UserInfoWrapper,
  UserDetailWrapper,
  UserWrapper,
  Branch,
  ImgWrapper,
  Seal,
  RoundedBox,
} from "@myPageComp/MyPage.style";
import Link from "next/link";
import { useRouter } from "next/router";
import { userStore } from "@zustand/userStore";
import React, { useEffect, useState } from "react";
import Modal from "@modal/Modal";
import UserEditModal from "@userComp/UserEditModal";
import { useQuery } from "react-query";
import Seo from "@common/Seo";

const getCount = async (userId: string | undefined) => {
  try {
    const wordbookRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/wordbook/count/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      },
    );

    const bookmarkRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/bookmark/count/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
        },
      },
    );

    if (!wordbookRes.ok || !bookmarkRes.ok) {
      throw new Error(wordbookRes.statusText && bookmarkRes.statusText);
    }

    const wordbookResult = await wordbookRes.json();
    const bookmarkResult = await bookmarkRes.json();

    return { wordbookResult, bookmarkResult };
  } catch (e) {
    console.error(e);
  }
};

const MyPage: NextPage = () => {
  const router = useRouter();
  const url = router.pathname;

  const [userEditModalOpen, setUserEditModalOpen] = useState(false);
  const [wordbookCount, setWordbookCount] = useState();
  const [bookmarkCount, setbookmarkCount] = useState();

  const user = userStore((state) => state.user);

  const sideBarWidth = parseInt(SIDEBAR_WIDTH.substring(0, 3)) + 100;

  const { data } = useQuery(
    ["getCount", user?.userId],
    () => getCount(user?.userId),
    {
      enabled: !!user?.userId,
    },
  );

  const userEditModalCloseHandler = () => {
    setUserEditModalOpen(false);
  };

  const userEditModalOpenHandler = () => {
    setUserEditModalOpen(true);
  };

  useEffect(() => {
    data && setWordbookCount(data.wordbookResult);
    data && setbookmarkCount(data.bookmarkResult);
  }, [data]);

  return (
    <>
      <Seo title="???????????????" />
      <MyPageWrapper
        $sideBarWidth={`${sideBarWidth}px`}
        $headerHeight={HEADER_HEIGHT}>
        <Wrapper>
          <UserInfoEdit
            $sideBarWidth={`${sideBarWidth}px`}
            onClick={userEditModalOpenHandler}>
            ?????? ?????? ????????????
          </UserInfoEdit>
        </Wrapper>
        <UserWrapper>
          <UserInfoWrapper>
            <Avatar>
              <AvatarImage
                src={
                  user?.userImage.startsWith("http")
                    ? user?.userImage
                    : `${process.env.NEXT_PUBLIC_IMAGE_URL}${user?.userImage}`
                }
                alt="avatar"
              />
            </Avatar>
            <UserName>{user?.userName}???</UserName>
          </UserInfoWrapper>
          <UserInfoWrapper>
            <UserDetailWrapper>
              <RoundedBox>?????????</RoundedBox>
              <UserInfoDetail>{user?.email}</UserInfoDetail>
            </UserDetailWrapper>
            <UserDetailWrapper>
              <RoundedBox>?????????</RoundedBox>
              <UserInfoDetail>{user?.comment}</UserInfoDetail>
            </UserDetailWrapper>
          </UserInfoWrapper>
          <UserInfoWrapper>
            <UserDetailWrapper>
              <RoundedBox>??? ?????????</RoundedBox>
              <UserInfoDetail>{wordbookCount}???</UserInfoDetail>
            </UserDetailWrapper>
            <UserDetailWrapper>
              <RoundedBox>???????????? ?????????</RoundedBox>
              <UserInfoDetail>{bookmarkCount}???</UserInfoDetail>
            </UserDetailWrapper>
          </UserInfoWrapper>
          <ImgWrapper>
            <Seal src="/logo.png" alt="seal" />
            <Branch src="/images/branch.png" alt="branch" />
          </ImgWrapper>
        </UserWrapper>
        <UserWrapper $box>
          <Link href={"/network"} passHref>
            <Browser>
              ????????? {"\n"}????????????
              <Triangle />
            </Browser>
          </Link>

          <Link href={"/vocabulary"} passHref>
            <Browser>
              ??? ?????????{"\n"}????????????
              <Triangle />
            </Browser>
          </Link>
        </UserWrapper>
        {userEditModalOpen && (
          <Modal
            open={userEditModalOpen}
            width="500px"
            onClose={userEditModalCloseHandler}
            large={true}
            url={url}>
            <UserEditModal
              onClose={userEditModalCloseHandler}
              userInfo={user}
            />
          </Modal>
        )}
      </MyPageWrapper>
    </>
  );
};

export default MyPage;
