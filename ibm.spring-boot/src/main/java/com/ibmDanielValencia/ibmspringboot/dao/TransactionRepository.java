package com.ibmDanielValencia.ibmspringboot.dao;

import com.ibmDanielValencia.ibmspringboot.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
