package com.pairlearning.expensetracker;

import com.pairlearning.expensetracker.domain.User;
import com.pairlearning.expensetracker.exceptions.EtAuthException;
import com.pairlearning.expensetracker.repositories.UserRepositoryImpl;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mindrot.jbcrypt.BCrypt;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Assertions.*;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest
class ExpenseTrackerApiApplicationTests {

	@Mock
	private JdbcTemplate jdbcTemplate;

	@InjectMocks
	private UserRepositoryImpl userRepository;

	@Test
	void contextLoads() {
	}

	@BeforeEach
	public void setUp(){
		User userMock = new User(1, "firstName", "lastName",
				"example@email.com", BCrypt.hashpw("password123", BCrypt.gensalt()));

		when(jdbcTemplate.queryForObject(anyString(),
				any(Object[].class), any(RowMapper.class))).thenReturn(userMock);
	}


	@Test
	void testFindByEmailAndPassword() throws EtAuthException {

		User result = userRepository.findByEmailAndPassword("example@email.com", "password123");

		assertNotNull(result);
		assertEquals("example@email.com", result.getEmail());

		verify(jdbcTemplate).queryForObject(anyString(), any(Object[].class), any(RowMapper.class));


	}

}
