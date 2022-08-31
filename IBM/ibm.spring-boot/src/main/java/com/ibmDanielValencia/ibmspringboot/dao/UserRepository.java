package com.ibmDanielValencia.ibmspringboot.dao;

import com.ibmDanielValencia.ibmspringboot.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
