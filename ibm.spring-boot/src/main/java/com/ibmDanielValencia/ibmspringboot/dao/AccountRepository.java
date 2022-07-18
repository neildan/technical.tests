package com.ibmDanielValencia.ibmspringboot.dao;

import com.ibmDanielValencia.ibmspringboot.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
