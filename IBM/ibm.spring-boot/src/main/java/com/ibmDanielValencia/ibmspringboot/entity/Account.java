package com.ibmDanielValencia.ibmspringboot.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name="accounts")
@Getter
@Setter
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "number_account")
    private String numberAccount;

    @Column(name = "type_account")
    private String typeAccount;

    @Column(name = "amount")
    private Float amount;

    @Column(name = "created_at")
    @CreationTimestamp
    private Date createdAt;

    @Column(name = "updated_at")
    @UpdateTimestamp
    private Date updatedAt;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "account")
    private Set<Transaction> transactions;
}
