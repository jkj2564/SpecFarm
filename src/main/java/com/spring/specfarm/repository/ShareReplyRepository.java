package com.spring.specfarm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.spring.specfarm.entity.ShareReply;
import com.spring.specfarm.entity.ShareReplyId;

public interface ShareReplyRepository extends JpaRepository<ShareReply, ShareReplyId> {

	List<ShareReply> findByShareIdx(int shareIdx);

	@Query(value="SELECT IFNULL(MAX(SHARE_REPLY_IDX), 0) + 1 FROM T_SHARE_REPLY WHERE SHARE_IDX = :shareIdx", nativeQuery=true)
	int getShareReplyIdx(@Param("shareIdx")int shareIdx);

}
